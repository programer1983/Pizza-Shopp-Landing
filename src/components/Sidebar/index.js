import {
    SidebarContainer, 
    Icon, 
    CloseIcon,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute,
} from "./SidebarElements"

const Sidebar = () => {
  return (
    <SidebarContainer>
        <Icon>
            <CloseIcon />
        </Icon>
        <SidebarMenu>
            <SidebarLink to="/">Pizza</SidebarLink>
            <SidebarLink to="/">Desserts</SidebarLink>
            <SidebarLink to="/">Full Menu</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
            <SidebarRoute to="/">Order Now</SidebarRoute>
        </SideBtnWrap>
    </SidebarContainer>
  )
}

export default Sidebar