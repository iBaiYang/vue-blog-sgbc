import ShowBlog from './components/ShowBlog'
import AddBlog from './components/AddBlog'
import SingleBlog from './components/SingleBlog'
import EditBlog from './components/EditBlog'

export default[
    {path:"/", component:ShowBlog},
    {path:"/add", component:AddBlog},
    {path:"/blog/:id", component:SingleBlog},
    {path:"/edit/:id", component:EditBlog},
];