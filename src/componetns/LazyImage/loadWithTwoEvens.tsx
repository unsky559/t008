import React from 'react';
import getTwoEven from '../../requests/getTwoEven';

export default function loadWithTwoEvens(Component: any) {
  return class extends React.Component<Record<string, any>, {isLoading: boolean}> {
    constructor(props: { isLoading: boolean }) {
      super(props);
      this.state = {
        isLoading: true,
      };
    }

    componentDidMount() {
      getTwoEven().then(() => {
        this.setState({
          isLoading: false,
        });
      }).catch(() => {
        alert('Error: Probably, Random.org service in now unavailable for some reason :(');
      });
    }

    render() {
      return <Component isLoading={this.state.isLoading} {...this.props} />;
    }
  };
}
