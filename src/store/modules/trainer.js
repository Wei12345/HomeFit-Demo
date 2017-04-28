const state = {
	trainerList: [
		{
			name: 'ch',
			showName: 'C.H.',
			image: 'trainer_ch',
			major: '自體重量訓練、循環訓練、TRX、燃脂、HIIT'
		},{
			name: 'hunt',
			showName: 'Hunt',
			image: 'trainer_hunt',
			major: '自體重量訓練、拳擊'
		},{
			name: 'johnny',
			showName: 'Johnny',
			image: 'trainer_johnny',
			major: '自體重量訓練、TRX'
		},{
			name: 'kevin',
			showName: 'Kevin',
			image: 'trainer_kevin',
			major: '自體重量訓練、TRX'
		},{
			name: 'rob',
			showName: 'Rob',
			image: 'trainer_rob',
			major: '運動按摩拉筋伸展、增肌減脂訓練指導'
		},{
			name: 'soon',
			showName: 'Soon',
			image: 'trainer_soon',
			major: '核心訓練、拳擊燃脂'
		},{
			name: 'sunny',
			showName: 'Sunny',
			image: 'trainer_sunny',
			major: '拳擊、Fitness'
		},{
			name: 'woojo',
			showName: 'Woojo',
			image: 'trainer_woojo',
			major: '拳擊、Fitness'
		}

	]
}

const getters = {
	trainerList: state => state.trainerList
}

export default{
	state,
	getters
}