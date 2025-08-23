import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { auth } from "../utils/firebase";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url("https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80")
    no-repeat center center/cover;
  position: relative;
  font-family: "Poppins", sans-serif;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(28, 28, 28, 0.6);
`;

const Card = styled.div`
  position: relative;
  background: #fff;
  padding: 35px;
  border-radius: 16px;
  width: 360px;
  text-align: center;
  box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.3);
  z-index: 2;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #fc8019;
  font-weight: 600;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 14px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
  outline: none;
  &:focus {
    border-color: #fc8019;
    box-shadow: 0 0 5px rgba(252, 128, 25, 0.5);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: none;
  border-radius: 8px;
  background: #fc8019;
  color: white;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s ease;
  &:hover {
    opacity: 0.9;
  }
`;

const ToggleText = styled.p`
  font-size: 14px;
  margin-top: 15px;
  color: #555;
  span {
    color: #fc8019;
    font-weight: 500;
    cursor: pointer;
  }
`;

const Welcome = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #333;
  margin-bottom: 10px;
`;

const LoginSignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const register = async () => {
    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Update displayName in Firebase Auth
      await updateProfile(user, { displayName: name });

      // Force reload to get updated info
      await user.reload();

      setUser({ ...user, displayName: user.displayName });

      // Save to Firestore
      const db = getFirestore();
      await setDoc(doc(db, "users", user.uid), {
        name: name,
        email: email,
        createdAt: new Date(),
      });

      alert("Signup successful 🎉");
      setName("");
      setEmail("");
      setPassword("");
      setIsLogin(true); // Switch to login or stay logged in
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  const login = async () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      alert("Login successful 🎉");
    } catch (error) {
      console.error(error);
      alert("Invalid email or password");
    }
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
    alert("Logout successful");
  };

  return (
    <Container>
      <Overlay />
      <Card>
        {user ? (
          <>
            <Welcome>Welcome, {user.displayName || user.email}</Welcome>
            <Button onClick={logout}>Logout</Button>
          </>
        ) : (
          <>
            <Title>{isLogin ? "Login" : "Signup"}</Title>

            {!isLogin && (
              <Input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            )}

            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {isLogin ? (
              <Button onClick={login}>Login</Button>
            ) : (
              <Button onClick={register}>Signup</Button>
            )}

            <ToggleText>
              {isLogin ? (
                <>
                  Don’t have an account? <span onClick={() => setIsLogin(false)}>Signup</span>
                </>
              ) : (
                <>
                  Already have an account? <span onClick={() => setIsLogin(true)}>Login</span>
                </>
              )}
            </ToggleText>
          </>
        )}
      </Card>
    </Container>
  );
};

export default LoginSignup;
