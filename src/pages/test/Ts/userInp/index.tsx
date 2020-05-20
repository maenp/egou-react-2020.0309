import React, { RefObject, FormEvent } from 'react';

const UserInp = () => {
    let submitHandler = (e: FormEvent) => {
        e.preventDefault()
        console.log(userRef.current?.value)
        console.log(userRef2.current?.value)
    }
    let userRef: RefObject<HTMLInputElement> = React.createRef()
    let userRef2: RefObject<HTMLInputElement> = React.createRef()
    let pwdRef: HTMLInputElement | null
    return (
        <form action="" onSubmit={submitHandler}>
            <label htmlFor={'xing'}>
                姓
                <input name="xing" type="text" ref={userRef} />
            </label><br />
            <label htmlFor="ming">
                名
                <input name="ming" type="text" ref={userRef2} />
            </label><br />
            <button type={'submit'}>提交</button>
        </form>
    )
}

export default UserInp;
