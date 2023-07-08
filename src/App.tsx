import { AuthProvider } from "./contexts/users/auth"
import { Page } from "./exericios/page"

function App() {

  return (
    <AuthProvider>
      <h1>Hello React Typescript!</h1>
      <Page />
    </AuthProvider>
  )
}

export default App
