import React, { useState } from 'react';
import { Navbar, SubHeading } from '../../components';
import { images } from '../../constants';
import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { Box, Stack } from "@mui/material";
import { register, reset } from '../../features/accountFeatures/accountSlice'
import PasswordChecklist from "react-password-checklist"
import './SignUp.css';

const SignUpForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [apartment, setApartment] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [province, setProvince] = useState('');
    const [country, setCountry] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [progress, setProgress] = useState(0);
    const [display, setDisplay] = useState(1);
    const [clickCount, setClickCount] = useState(0);
    const [currentInput, setCurrentInput] = useState(1);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            toast.error('Passwords do not match')
        }
        else {
            const userData = {
                name,
                email,
                password,
                street,
                city,
                province,
                country,
                postalCode,
                apartment,
            }

            dispatch(register(userData))
        }
        
    };

    const handleClick = () => {
        setProgress(prevProgress => (prevProgress + 1) % 3);
        setClickCount(clickCount + 1);

        if (display === 3) {
            setDisplay(1);
        } else {
            setDisplay(display + 1);
        }
    };

    const checkPassword = (password) => {
        var re = /^(?=.*\d)(?=.*[A-Z]).{8,}$/;
        return re.test(password);
    }


    const handleKeyDown = (e, event) => {

        if (e.key === ("Enter") && { confirmPassword } !== null) {

            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return;
            }
            else if (!checkPassword(password)) {
                alert('Please try a different password');
                return;
            }
            else {
                setCurrentInput(currentInput + 1);
            }
        }
        else {
            setCurrentInput(currentInput);
        }
        
        setProgress(prevProgress => (prevProgress + 1) % 3);
        setClickCount(clickCount + 1);

        if (display === 3) {
            setDisplay(1);
        } else {
            setDisplay(display + 1);
        }
    };

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    )

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        if (isSuccess || user) {
            navigate('/')
        }

        dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch])

    return (
        <div>
            <Navbar />

            <Stack sx={{ flexDirection: { sx: "column", md: "row" }, background: "var(--color-lightgreen)" }}>
                <Box p={0} sx={{ overflowY: "auto", height: "100vh", flex: 2 }}>
                    <div className="account">
                        <div className="account__table">
                            <div className="login__table-column1">
                                <div className="login__img">
                                    <img src={images.login} alt="G_overlay" className="blur" />
                                </div>
                            </div>

                            <div className="signup__table-column2">
                                <form onSubmit={handleSubmit}>
                                    <div className='signup__header1'>
                                        <SubHeading title={"Sign Up"} className='login__subheading' />

                                        <p>Join us to be part of the greater world!</p>
                                    </div>

                                    {currentInput === 1 && (
                                        <div className='signup__details'>
                                            <div>
                                                <input
                                                    className='login__input'
                                                    type="string"
                                                    id="name"
                                                    name="name"
                                                    placeholder='Name'
                                                    value={name}
                                                    onChange={(event) => setName(event.target.value)}
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <input
                                                    className='login__input'
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    placeholder='Email'
                                                    value={email}
                                                    onChange={(event) => setEmail(event.target.value)}
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <input
                                                    className='login__input'
                                                    type="password"
                                                    id="password"
                                                    name="password"
                                                    placeholder='Password'
                                                    value={password}
                                                    onChange={(event) => setPassword(event.target.value)}
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <input
                                                    className='login__input'
                                                    type="password"
                                                    id="confirmPassword"
                                                    name="confirmPassword"
                                                    placeholder='Confirm Password'
                                                    value={confirmPassword}
                                                    onKeyDown={handleKeyDown}
                                                    onChange={(event) => setConfirmPassword(event.target.value)}
                                                    required
                                                />
                                            </div>

                                            <br></br>
                                            <div class="passwordChecklist">

                                                <PasswordChecklist
                                                    rules={["minLength", "specialChar", "number", "capital", "match"]}
                                                    minLength={8}
                                                    value={password}
                                                    valueAgain={confirmPassword}
                                                />
                                            </div>
                                        </div>
                                    )} {currentInput === 2 && (
                                        <div>
                                            <div>
                                                <input
                                                    className='login__input'
                                                    type="string"
                                                    id="apartment"
                                                    name="apartment"
                                                    placeholder='Address Complement'
                                                    value={apartment}
                                                    onChange={(event) => setApartment(event.target.value)}
                                                />
                                            </div>

                                            <div>
                                                <input
                                                    className='login__input'
                                                    type="string"
                                                    id="street"
                                                    name="street"
                                                    placeholder='Street Address'
                                                    value={street}
                                                    onChange={(event) => setStreet(event.target.value)}
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <input
                                                    className='login__input'
                                                    type="string"
                                                    id="city"
                                                    name="city"
                                                    placeholder='City'
                                                    value={city}
                                                    onKeyDown={handleKeyDown}
                                                    onChange={(event) => setCity(event.target.value)}
                                                    required
                                                />
                                            </div>
                                        </div>
                                    )} {currentInput === 3 && (
                                        <div>
                                            <div>
                                                <input
                                                    className='login__input'
                                                    type="string"
                                                    id="province"
                                                    name="province"
                                                    placeholder='State/Province'
                                                    value={province}
                                                    onChange={(event) => setProvince(event.target.value)}
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <input
                                                    className='login__input'
                                                    type="string"
                                                    id="country"
                                                    name="country"
                                                    placeholder='Country'
                                                    value={country}
                                                    onChange={(event) => setCountry(event.target.value)}
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <input
                                                    className='login__input'
                                                    type="string"
                                                    id="postalCode"
                                                    name="postalCode"
                                                    placeholder='Postal Code'
                                                    value={postalCode}
                                                    onChange={(event) => setPostalCode(event.target.value)}
                                                    required
                                                />
                                            </div>
                                        </div>
                                    )}

                                    <div className="signup__link">
                                        <div className="ProgressButton">
                                            <div className="ProgressBar">

                                                <div className="ProgressBar">
                                                    <span className={progress === 0 ? 'Active' : ''} />
                                                    <span className={progress === 1 ? 'Active' : ''} />
                                                    <span className={progress === 2 ? 'Active' : ''} />
                                                </div>
                                            </div>

                                            <div >
                                                {currentInput === 3 ? (
                                                    <button type="submit" className="signup__button">Sign Up</button>
                                                ) : null}
                                            </div>
                                        </div>

                                        <Link to="/login">
                                            <p className='signup__login'>
                                                Already have an account?
                                                Log in
                                            </p>
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </Box>
            </Stack>
        </div>
    );
};

export default SignUpForm;


