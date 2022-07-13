import { notification, Spin } from 'antd';
import { REQUEST_STATE } from 'app-configs';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { LOGIN } from 'redux/actions/user';
import backgroundImage from 'assets/images/login/background.png';
import family from 'assets/images/login/family.png';
import blockChain from 'assets/images/login/blockchain.png';
import { useForm } from 'react-hook-form';
import { getEmailValidationRegrex } from 'helpers/validator';
import './Login.css';
import './animated.css';

const Login = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const history = useHistory();
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const onSubmit = (data) => {
        dispatch(LOGIN(data));
    };

    useEffect(() => {
        if (user.authState == REQUEST_STATE.SUCCESS) {
            history.push('/');
        }
        if (user?.authState === REQUEST_STATE.ERROR) {
            notification.error({
                message: 'Thất bại',
                description: 'Tài khoản hoặc mật khẩu không chính xác!',
            });
        }
    }, [user?.authState]);

    return (
        <div
            className="login flex-center animated-block__area"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                position: 'relative',
            }}
        >
            <div
                className="login__box"
                style={{
                    position: 'absolute',
                    zIndex: 99,
                }}
            >
                <div className="auth__form --welcome">
                    <img src={family} alt="family" />
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="auth__form">
                    <div className="auth__header is-flex-col al-center ju-center">
                        <div className="auth__header--label">Đăng nhập</div>
                    </div>
                    <div className="auth__body is-flex-col">
                        <div className="auth__label required">Email</div>
                        <div className="input-effect">
                            <input
                                {...register('email', {
                                    required: true,
                                    // pattern: getEmailValidationRegrex(),
                                })}
                                className="effect effect__email"
                                type="text"
                                placeholder="Nhập tài khoản email của bạn"
                                autoComplete="false"
                            />
                            <span className="focus-border">
                                <i></i>
                            </span>
                        </div>
                        {errors.email?.type === 'required' && (
                            <div className="auth__error">Trường này không được để trống</div>
                        )}
                        {errors.email?.type === 'pattern' && (
                            <div className="auth__error">Email bạn nhập không đúng định dạng</div>
                        )}
                        <div className="auth__label required">Password</div>
                        <div className="input-effect">
                            <input
                                {...register('password', { required: true })}
                                className="effect effect__pw"
                                type="password"
                                placeholder="Nhập mật khẩu"
                                autoComplete="false"
                            />
                            <span className="focus-border">
                                <i></i>
                            </span>
                        </div>
                        {errors.password?.type === 'required' && (
                            <div className="auth__error">Trường này không được để trống</div>
                        )}
                        <button className="auth__box is-flex al-center ju-center">
                            {user?.authState === REQUEST_STATE.REQUEST ? (
                                <Spin
                                    style={{
                                        color: '#5DBB13',
                                    }}
                                />
                            ) : (
                                'Đăng nhập'
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
