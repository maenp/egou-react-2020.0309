import React,{Component} from 'react'
import { List, InputItem } from 'antd-mobile';
import { createForm } from 'rc-form';
import {Input} from "@pages/test/Ts/childs/styled";

const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let moneyKeyboardWrapProps;
if (isIPhone) {
    moneyKeyboardWrapProps = {
        // onTouchStart: e => e.preventDefault(),
    };
}
@createForm()
class H5NumberInputExample extends Component {
    state = {
        type: 'money',
    }

    render() {
        const { getFieldProps } = this.props.form;
        const { type } = this.state;
        return (
            <Input>
                <List>
                    <InputItem
                        {...getFieldProps('money3',)}
                        type={type}
                        defaultValue={100}
                        placeholder="start from left"
                        clear
                        moneyKeyboardAlign="left"
                        moneyKeyboardWrapProps={moneyKeyboardWrapProps}
                    >光标在左</InputItem>
                    <InputItem
                        type={type}
                        placeholder="start from right"
                        clear
                        onChange={(v) => { console.log('onChange', v); }}
                        onBlur={(v) => { console.log('onBlur', v); }}
                        moneyKeyboardWrapProps={moneyKeyboardWrapProps}
                    >光标在右</InputItem>
                    <InputItem
                        {...getFieldProps('money2', {
                            normalize: (v, prev) => {
                                if (v && !/^(([1-9]\d*)|0)(\.\d{0,2}?)?$/.test(v)) {//小数点后只允许输入两位
                                    if (v === '.') {
                                        return '0.';
                                    }
                                    return prev;
                                }
                                return v;
                            },
                        })}
                        type={type}
                        placeholder="money format"
                        ref={el => this.inputRef = el}
                        onVirtualKeyboardConfirm={v => console.log('onVirtualKeyboardConfirm:', v)}
                        clear
                        moneyKeyboardWrapProps={moneyKeyboardWrapProps}
                        // disabledKeys={['.', '0', '3']}
                    >数字键盘</InputItem>
                    <List.Item>
                        <div
                            style={{ width: '100%', color: '#108ee9', textAlign: 'center' }}
                            onClick={this.clickHandler.bind(this)}
                        >
                            click to focus
                        </div>
                    </List.Item>
                </List>
            </Input>
        );
    }
    clickHandler(){
        console.log(this.props.form.getFieldsValue())
        this.props.form.getFieldsValue()
    }
}

export default H5NumberInputExample