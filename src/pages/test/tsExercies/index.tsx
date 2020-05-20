import React, {Component} from 'react';

class Index extends Component {
    Array() {
        //1,类型加[]
        let arr: number[] = [1, 2, 3]
        let arr1: string[] = ['1', '2', '3']
        let arr3: any[] = [1, 2, '3', true]


        //2,数组泛型Array<elemType>表示法
        let arr4: Array<number> = [1, 2, 3]
        let arr5: Array<string> = ['1', '2', '3']
        let arr6: Array<any> = ['1', '2', '3']


        //3,接口表示法
        interface IArr {
            [index: number]: number
        }

        let arr7: IArr = [1, 2, 3]

        interface IIndex {
            name: string
            age: number
        }

        interface IArr2 {
            [index: number]: IIndex
        }

        let arr8: IArr2 = [{name: 'ma', age: 18}]


        let arr9: Array<IIndex> = [{name: 'ma', age: 18}]
        let arr10: IIndex[] = [{name: 'ma', age: 18}]//推荐这种写法

    }

    Function() {
        //声明式函数
        //               参数   类型         默认值       参数可有可无   返回值是number
        function funType(name: string, age: number = 20, sex?: string): number {
            return age
        }

        let age = funType('ma', 18)

        //表达式类型的函数
        let funType2 = (name: string, age: number = 20, sex?: string): number => { //没有约束变量funType2
            return age
        }
        let funType3: (name: string, age: number, sex?: string) => number = (name: string, age: number = 20, sex?: string): number => { //约束了变量funType3
            return age
        }

        interface IFunc {
            (name: string, age: number, sex?: string): number
        }

        let funType4: IFunc = (name: string, age: number = 20, sex?: string): number => { //接口方式约束变量funType4
            return age
        }

        //对于联合类型的函数可以使用重载的方式
        //输入是number输出也是number，
        //输入是string输出也是string，
        function getValue(value: string): string;
        function getValue(value: number): number;
        function getValue(value: number | string): number | string {
            return value
        }

        let value: number = getValue(1)
        let value1: string = getValue('1')

    }

    Assert() {//类型断言    注意这里只能断言该属性联合类型中拥有的类型   不是强制类型转换
        function getValue(name: number | string) {
            // return name.length //这样写会报错，因为name有可能不会有length属性
            // return (<string>name).length //正确写法  这但是在react里会报错 因为react会解析尖括号与jsx语法冲突
            return (name as string).length //正确写法 不会报错  这里断言了name是一个string  react中只能选择这种写法
        }
    }
    Alias(){//类型别名
        type strType='男'|'女'
        function get(sex:strType) {

        }
        get('男')
    }
    class(){//类的修饰符  private protected

        class Person{
            private name=1 //name属性变成了私有属性  只能在内部访问
            protected age=18 //受保护的属性 可以在内部和子类的内部访问，不允许外部访问
            say(){
                console.log(this.name)//name属性可以在内部正常访问
            }
        }
        // new Person().name //name属性有private不能在外部访问、只能在类内部调用 包括子类也不能调用

        class Child extends Person{
            say() {
                console.log(this.age)//age可以在子类中访问
            }
        }

    }
    render() {
        return (
            <div>

            </div>
        );
    }
}

export default Index;