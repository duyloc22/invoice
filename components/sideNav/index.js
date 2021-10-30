import { Container, Square, Rect, Circle, Triangle, Toggler, Avatar, AvatarWrap } from "./styles/sideNav";

export default function Sidenav({ children, ...rest }) {
    return <Container {...rest}>{children}</Container>;
}

Sidenav.Square = function SidenavSquare({ children, ...rest }) {
    return <Square {...rest}>{children}</Square>;
};
Sidenav.Rect = function SidenavRect({ children, ...rest }) {
    return <Rect {...rest}>{children}</Rect>;
};
Sidenav.Circle = function SidenavCircle({ children, ...rest }) {
    return <Circle {...rest}>{children}</Circle>;
};
Sidenav.Triangle = function SidenavTriangle({ children, ...rest }) {
    return <Triangle {...rest}>{children}</Triangle>;
};
Sidenav.Toggler = function SidenavToggler({ children, ...rest }) {
    return <Toggler {...rest}>{children}</Toggler>;
};
Sidenav.Avatar = function SidenavAvatar({ children, ...rest }) {
    return <Avatar {...rest}>{children}</Avatar>;
};
Sidenav.AvatarWrap = function SidenavAvatarWrap({ children, ...rest }) {
    return <AvatarWrap {...rest}>{children}</AvatarWrap>;
};
