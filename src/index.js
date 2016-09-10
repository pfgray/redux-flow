// @flow
import * as redux from 'redux';

console.log('got redux: ', redux);

type Reducer<A, S> = (action: A, state: S) => S;


type Action = {};
type State = {woo:string};

var myReducer: Reducer<Action, State> = (action, state) => {
  return {
    woo: "whaattt"
  };
};



console.log("hmm,", myReducer({}, {
  woo: "lol"
}));
