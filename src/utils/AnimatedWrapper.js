import React, { Component } from "react";
import * as Animated from "animated/lib/targets/react-dom";

const AnimatedWrapper = (WrappedComponent, distance, delay) => class AnimatedWrapper

extends Component {

	constructor(props) {
		super(props);
		this.state = {
			animate: new Animated.Value(0)
		};
		if (!distance) distance = '12'
		if (!delay) delay = '150'
		delay = 150 * (props.position+1)
	}

	componentWillAppear(cb) {
		Animated.spring(this.state.animate, { toValue: 1 }).start()
		cb();
	}

	componentWillMount() {
		setTimeout(
			() => Animated.spring(this.state.animate, { toValue: 1 }).start(),
			delay
		);
//		Animated.spring(this.state.animate, { toValue: 1 }).start()
	}

	componentWillUnMount() {
		// Animated.spring(this.state.animate, { toValue: 0 }).start()
	}

	componentWillEnter(cb) {
		setTimeout(
			() => Animated.spring(this.state.animate, { toValue: 1 }).start(),
			delay
		);
		cb();
	}

	componentWillLeave(cb) {
		Animated.spring(this.state.animate, { toValue: 0 }).start()
		setTimeout(() => cb(), 75)
	}

	render() {

		const style = {
		}

		return (
			<Animated.div style={style} className="kjfdkf">
				<WrappedComponent {...this.props} />
			</Animated.div>
		)
	}

}

export default AnimatedWrapper;