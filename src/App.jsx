import Header from "./components/Header/Header.jsx";
import ArticleList from "./components/ArticleList/ArticleList.jsx";
import {useState} from "react";
import Form from "./components/Form/Form.jsx";

const App = () => {
    const [user, setUser] = useState();
    const hasUser = Boolean(user);

    return (
    <div className="h-screen">
        <Header user={user} />
        { hasUser ? <ArticleList /> : <Form onSubmit={setUser} /> }
    </div>
    )
}

export default App;
