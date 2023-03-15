import {ComponentType, FC} from "react";

function HOC1<WP extends {hiphop: number}>(WrappedComponent: ComponentType<WP>) {
    return (props: WP) => {
        return <WrappedComponent {...props} hiphop={10} />
    }
}

type C1PropsType = {
    title: string,
    hiphop: number
}

const C1: FC<C1PropsType> = (props) => {
    return <div>{props.title}</div>
}

const C1Container = HOC1(C1)