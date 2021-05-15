import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './Component/header_footer/Header';
import Login from './Component/login/Login';
import Posts from './Component/post/Posts';
import SignUp from './Component/signUp/SignUp';
import Home from './Component/home/Home';
import PostsList from './Component/post/PostsList';
import EditPersonel from './Component/profile/EditPersonel';
import Activity from './Component/activity/Activity';
import UserList from './Component/Admin/UserList';
import EditProfile from './Component/profile/EditProfile';
import Mycomments from './Component/activity/Mycomments';
import SavedPosts from './Component/activity/SavedPosts';
import Reaction from './Component/activity/Reaction';
import MyPosts from './Component/activity/MyPosts';
import PrivateRoutes from './Component/authRoutes/privateRoutes';
import PublicRoute from './Component/authRoutes/publicRoutes';
import Notfound from './Component/home/Notfound';
import EditEducation from './Component/profile/EditEducation';
import EditContact from './Component/profile/EditContact';
import Reports from './Component/Admin/Reports';
import Messages from './Component/contactUs/Messages';
import MsgList from './Component/Admin/MsgList';
import Msg from './Component/Admin/Msg';
import UserDetail from './Component/Admin/UserDetail';


function App(props) {
  return (
    <Router>
      <Header/>
      <Switch>
        <PrivateRoutes exact path='/profile/user/personal_information' component={EditPersonel} />
        <PrivateRoutes exact path='/profile/user/work_education' component={EditEducation} />
        <PrivateRoutes exact path='/profile/user/contact' component={EditContact} />
        <PrivateRoutes exact path='/profile/user/:id' component={EditProfile} />
        <PrivateRoutes exact path='/activity' component={Activity} />
        <PrivateRoutes exact path='/activity/my_comments' component={Mycomments} />
        <PrivateRoutes exact path='/activity/my_posts' component={MyPosts} />
        <PrivateRoutes exact path='/activity/saved_posts' component={SavedPosts} />
        <PrivateRoutes exact path='/activity/my_reactions' component={Reaction} />
        <PrivateRoutes exact path='/admin/reports' component={Reports} />
        <PrivateRoutes exact path='/admin/messages' component={MsgList} />
        <PrivateRoutes exact path='/admin/message/:id' component={Msg} />
        <PrivateRoutes exact path='/admin/all_users' component={UserList} />

        <PublicRoute exact path='/' component={Home} />
        <PublicRoute exact path='/login' component={Login} />
        <PublicRoute exact path='/register' component={SignUp} />
        <Route exact path='/posts' component={PostsList} />
        <Route exact path='/posts/:id' component={Posts} />
        <PublicRoute exact path='/users' component={UserList} />
        <PublicRoute exact path='/user/:id' component={UserDetail} />
        <PublicRoute exact path='/contactUs' component={Messages} />
        <PublicRoute  restricted={false} component={Notfound} />
      </Switch>
    </Router>
  );
}

export default App;
