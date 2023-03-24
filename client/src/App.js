
import UserRoutes from './Routes/UserRoutes';
import AdminRoutes from './Routes/AdminRoutes';
import React from "react";
import ChatProvider from './hooks/ChatProvider';


function App() {
  return (
<>
<ChatProvider>
<UserRoutes/>
</ChatProvider>
<AdminRoutes/>


</>
  );
}

export default App;
