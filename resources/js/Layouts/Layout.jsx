import Footer from './Footer';
import Header from './Header';

export default (props) => {
    const { children } = props

    return <>
        <Header {...props} />
        <main>{children}</main>
        <Footer {...props} />
    </>;
}
