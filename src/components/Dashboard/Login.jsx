import React from 'react'
import Router from 'next/router'
import LoginDialog from '~/components/Dialogs/Login'

const onRequestClose = () => Router.push('/dashboard/login')

const Login = () => <LoginDialog />

export default Login
