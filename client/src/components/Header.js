import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';


const Header = () => (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h6">Todo Application</Typography>
            <MenuItem component={Link} to="/">Home</MenuItem>
            <MenuItem component={Link} to="/list">Todo List</MenuItem>

        </Toolbar>
    </AppBar>
);



export default Header;