import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { buildingGetAction } from '../src/redux/actions/buildingAction'
import { Route } from "react-router-dom";
import { routesArr, privateRoutesArr } from './routes/Routes';
import PrivateRouting from './routes/PrivateRouting';

function App() {
  const disptach = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      disptach(buildingGetAction());
    }
  }, [])

  return (
    <div >
      {
        routesArr.map((route) => {
          return (
            <Route
              path={route.path}
              component={route.component}
              key={route.name}
              exact={route.exact}
            />
          )
        })
      }

      {
        privateRoutesArr.map((route) => {
          return (
            <PrivateRouting
              path={route.path}
              component={route.component}
              key={route.name}
              exact={route.exact}
            />
          )
        })
      }
    </div>
  );
}

export default App;
