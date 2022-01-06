import './App.css';
import { Layout } from 'antd';
import Quiz from './components/quiz/Quiz';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="App">
      <Header>
        <h1 className="header">Multiple​ ​choice​ ​exam</h1>
      </Header>
      <Content className="content">
        <Quiz></Quiz>
      </Content>
      <Footer>
        By George Somerville
      </Footer>
    </Layout>
  );
}

export default App;
