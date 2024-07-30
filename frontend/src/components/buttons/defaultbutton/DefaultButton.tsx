import classes from './defaultbutton.module.sass'

export default function DefaultButton({ children, isActive, ...props }: any) {
    return (<button {...props} className={isActive ? `${classes.button} ${classes.active}` : classes.button}>{children}</button>)
}