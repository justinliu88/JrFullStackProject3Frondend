import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PeopleIcon from "@material-ui/icons/People";
import TocIcon from "@material-ui/icons/Toc";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import RestaurantMenuIcon from "@material-ui/icons/RestaurantMenu";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import SettingsIcon from "@material-ui/icons/Settings";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";

const categories = [
    {
        id: "Store",
        children: [
            {
                id: "Welcome",
                icon: <PeopleIcon />,
                active: true,
            },
            {
                id: "Order History",
                icon: <TocIcon />,
            },
            {
                id: "Sales",
                icon: <TrendingUpIcon />,
            },
            {
                id: "Menu",
                icon: <RestaurantMenuIcon />,
            },
        ],
    },
    {
        id: "CRM",
        children: [
            {
                id: "Existing Customers",
                icon: <GroupAddIcon />,
            },
            {
                id: "Subscribers",
                icon: <SubscriptionsIcon />,
            },
        ],
    },
    {
        id: "Admin",
        children: [
            {
                id: "Staffs",
                icon: <WorkOutlineIcon />,
            },
            {
                id: "Settings",
                icon: <SettingsIcon />,
            },
            {
                id: "Notification",
                icon: <NotificationsActiveIcon />,
            },
        ],
    },
];

const styles = (theme) => ({
    categoryHeader: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
    categoryHeaderPrimary: {
        color: theme.palette.common.white,
    },
    item: {
        paddingTop: 1,
        paddingBottom: 1,
        color: "rgba(255, 255, 255, 0.7)",
        "&:hover,&:focus": {
            backgroundColor: "rgba(255, 255, 255, 0.08)",
        },
    },
    itemCategory: {
        backgroundColor: "#232f3e",
        boxShadow: "0 -1px 0 #404854 inset",
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
    firebase: {
        fontSize: 24,
        color: theme.palette.common.white,
    },
    itemActiveItem: {
        color: "#4fc3f7",
    },
    itemPrimary: {
        fontSize: "inherit",
    },
    itemIcon: {
        minWidth: "auto",
        marginRight: theme.spacing(2),
    },
    divider: {
        marginTop: theme.spacing(2),
    },
});

class Navigator extends React.Component {
    render() {
        const { classes, ...other } = this.props;
        return (
            <Drawer variant="permanent" {...other}>
                <List disablePadding>
                    <ListItem
                        className={clsx(
                            classes.firebase,
                            classes.item,
                            classes.itemCategory
                        )}
                    >
                        Margherita{" "}
                    </ListItem>{" "}
                    {categories.map(({ id, children }) => (
                        <React.Fragment key={id}>
                            <ListItem className={classes.categoryHeader}>
                                <ListItemText
                                    classes={{
                                        primary: classes.categoryHeaderPrimary,
                                    }}
                                >
                                    {id}{" "}
                                </ListItemText>{" "}
                            </ListItem>{" "}
                            {children.map(({ id: childId, icon, active }) => (
                                <ListItem
                                    key={childId}
                                    button
                                    className={clsx(
                                        classes.item,
                                        active && classes.itemActiveItem
                                    )}
                                >
                                    <ListItemIcon className={classes.itemIcon}>
                                        {" "}
                                        {icon}{" "}
                                    </ListItemIcon>{" "}
                                    <ListItemText
                                        classes={{
                                            primary: classes.itemPrimary,
                                        }}
                                    >
                                        {childId}{" "}
                                    </ListItemText>{" "}
                                </ListItem>
                            ))}
                            <Divider className={classes.divider} />{" "}
                        </React.Fragment>
                    ))}{" "}
                </List>{" "}
            </Drawer>
        );
    }
}

Navigator.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigator);
