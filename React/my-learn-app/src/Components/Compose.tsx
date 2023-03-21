import {ComponentType, FC} from "react";
import {compose} from "redux";
import {connect} from "react-redux";

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

type FromHipHopHOCPropsType = Omit<C1PropsType, 'hiphop'>

type FromHipHopHOCType = ComponentType<FromHipHopHOCPropsType>
type FromDanceHOCType = ComponentType<Omit<FromHipHopHOCPropsType, 'dance'>>

const SuperHOC = compose<FromHipHopHOCType, // A
    ComponentType<C1PropsType>, // T1
    FromDanceHOCType>( // R
    DanceHOC,
    HipHopHOC
);

const C1Container2 = SuperHOC(C1)

export default C1Container2