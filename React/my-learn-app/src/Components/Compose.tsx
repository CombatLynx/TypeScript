import {ComponentType, FC} from "react";
import {compose} from "redux";

function A<T extends { name: string }>(entity: T) {
}

type WithNameType = { name: string }

// можно все и обязательно нужно name
A({name: 'Misha', age: 24})

// должны быть только те поля, которы есть в type`е
let a: WithNameType = {
    name: 'Misha',
    // age: 24
}

// ------------------------------------------------------------------------------

function HipHopHOC<WP extends { hiphop: number }>(WrappedComponent: ComponentType<WP>) {
    const ContainerComponent: FC<Omit<WP, 'hiphop'>> = (props) => {
        return <WrappedComponent {...props as WP} hiphop={10}/>
    }

    return ContainerComponent
}

function DanceHOC<WP extends { dance: number }>(WrappedComponent: ComponentType<WP>) {
    const ContainerComponent: FC<Omit<WP, 'dance'>> = (props) => {
        return <WrappedComponent {...props as WP} dance={12}/>
    }

    return ContainerComponent
}

type C1PropsType = {
    title: string,
    hiphop: number,
    dance: number
}

const C1: FC<C1PropsType> = (props) => {
    return <div>{props.title}</div>
}

// const C1Container = HipHopHOC(C1)
// const C2Container2 = DanceHOC(C1Container)

const C2Container2 = compose(
    DanceHOC,
    HipHopHOC
)(C1)

export default C2Container2