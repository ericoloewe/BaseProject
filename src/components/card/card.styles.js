const styles = ({
	card: {
		alignItems: 'center',
		justifyContent: 'center',
		width: 124,
		height: 176,
		backgroundColor: 'white',
		borderWidth: 1,
		borderColor: "rgba(200, 200, 200, .5)",
		borderRadius: 6,
		elevation: 4
	},
	leftTop: {
		width: 20,
		height: 40,
		flexDirection: 'column',
		position: 'absolute',
		top: 0,
		left: 0,
		backgroundColor: 'transparent'
	},
	rightBottom: {
		width: 20,
		height: 40,
		flexDirection: 'column',
		position: 'absolute',
		bottom: 0,
		right: 0,
		backgroundColor: 'transparent',
		transform: [{rotateX:'180deg'}]
	},
	type: {
		height: 20,
		textAlign: 'center',
	},
	order: {
		height: 20,
		textAlign: 'center',
	},
	center: {
		width: 80,
		height: 80,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'transparent'
	},
	centerLogo: {
		fontSize: 70,
		flex: 1,
		textAlign: 'center',
		lineHeight: 80
	}

})

export { styles };
