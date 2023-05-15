export default function Footer(props) {
    const background = props.bg;
    const color = props.text;
    const padding = props.padding;

    return (<footer style={{
        background,
        color,
        padding
    }}>
        {props.children}
        </footer>)
}