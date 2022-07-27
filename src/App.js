import { React ,Component} from "react";
import './App.scss';
import Wrapper from "./components/wrapper/wrapper.component";
import { ModalOverlay } from "./components/overlays/checkout_modal_overlay/checkout_modal_overlay.component";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
class App extends Component{
  // constructor() {
  //   super();
    
  // };
  render() {
    return (
		<Switch>
			<Route exact path="/checkout/">
				<Wrapper></Wrapper>
				<ModalOverlay></ModalOverlay>
        </Route>
			<Route path="/">
				<Wrapper></Wrapper>
        </Route>
        
		</Switch>
	);
  }
}


export default App;
