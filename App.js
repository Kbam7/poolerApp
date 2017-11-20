/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Dimensions,
	Platform,
	ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import { Button, Divider, FormLabel, FormInput } from 'react-native-elements';

/* Custom Form Input */
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Sae } from 'react-native-textinput-effects';


const { width, height } = Dimensions.get('window');

export default class App extends Component<{}> {
	constructor(props) {
		super(props);
		this.state = {
			orientation: 'portrait', 
			user: '',
			screenDims: {},
		};
	}

	/*
	** Get the screen dimentions when the layout is set.
	** Fired on screen rotation
	*/
	onLayout(e) {
		const {width, height} = Dimensions.get('window')
		console.log(width, height)
	}

  render() {
    return (
			<ScrollView
				onLayout={this.onLayout.bind(this)}
				style={styles.mainScrollView}>
				


				<View style={styles.container}>
					<Text style={styles.header}>
						Sign in
					</Text>

					<Sae
					inputStyle={{color: 'red'}}
						style={styles.formInput}
						label={'Email Address'}
						iconClass={FontAwesomeIcon}
						iconName={'pencil'}
						iconColor={'red'}
						// TextInput props
						autoCapitalize={'none'}
						autoCorrect={false}
					/>

					{/*<FormLabel>Email</FormLabel>*/}
					<FormInput
						//style={{borderColor: '#f00', borderWidth: 1, borderStyle: 'solid'}}
						placeholder='Username/Email'
						underlineColorAndroid='transparent'
						onChangeText={(text) => this.setState({text})}
						inputStyle={styles.formInput}
					/>
					{/*<FormLabel>Password</FormLabel>*/}
					<FormInput
						placeholder='Password'
						secureTextEntry={true}
						underlineColorAndroid='transparent'
						onChangeText={(text) => this.setState({text})}
						inputStyle={styles.formInput}
					/>

					<Button
						leftIcon={{name: 'arrow-right', type: 'feather'}}
						title=''
						accessibilityLabel='Login button'
						buttonStyle={styles.buttons}
						//loading={true}
					/>

					<Divider style={styles.divider} />
					
					<View>
						<Text style={styles.actionText}>
							Need an account? Sign up now
						</Text>
						<Button
							title='Sign up'
							accessibilityLabel='Sign up button'
							color='#1592e6'
							buttonStyle={[styles.buttons, {backgroundColor: '#F5FCFF'}]}
							fontSize={20}
							fontWeight='bold'					
						/>
					</View>

				</View>
			</ScrollView>
    );
  }
}

const styles = StyleSheet.create({
	mainScrollView: {
		flex: 1,
		// justifyContent: 'center',
    // alignItems: 'center',
		backgroundColor: '#F5FCFF',
  },
  container: {
		flex: 1,
		maxWidth: 420,
    //justifyContent: 'center',
    //alignItems: 'center',
		backgroundColor: 'transparent',
  },
  header: {
		fontSize: 22,
		textAlign: 'center',
		fontWeight: 'bold',
		color: '#1592e6',
		//paddingLeft: 15,
    marginBottom: 5,
	},
	actionText: {
		textAlign: 'center',
		fontWeight: 'bold',
		margin: 15,
	},
	divider: {
		backgroundColor: 'lightgrey',
		width: width - 30,
		margin: 15,
		marginBottom: 30,
	},
  buttons: {
	...Platform.select({
		android: {
		  minHeight: 46,
		  //width: width - 30,
		},
		ios: {
		  minHeight: 36,
		  width: width,
		},
	}),
	//maxWidth: 360,
	borderColor: '#1592e6',
	borderWidth: 3,
	borderStyle: 'solid',
	marginTop: 20,
	marginBottom: 20,
	backgroundColor: '#1592e6',
	borderRadius: 3,
	//padding: 10,
	//paddingLeft: 50,
	//paddingRight: 50,
	//width: '100%',
	//alignContent: 'center'
	},
	formInput: {
		padding: 0,
		marginLeft: 0,
		marginRight: 0,
		//marginVertical: 10,
		//marginHorizontal: 15,
		borderColor: '#1592e6',
		borderWidth: 1,
		borderRadius: 1,
		borderStyle: 'solid',
	},
});
