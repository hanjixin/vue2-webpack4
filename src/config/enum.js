export default {
  getID: {
    salary: {
      '2000-2500': 1,
      '2500-3000': 2,
      '3000-3500': 3,
      '3500-4000': 4
    },
    intrduction: {
      '我想挣钱': 1,
      '我想学知识，长知识': 2,
      '我想边工作: 3，边玩': 4
    },
    sex: {
      '男': 1,
      '女': 2
    },
    edu: {
      '初中以下': 1,
      '高中以上': 2,
      '大学': 3,
      '大专': 4,
      '高中': 5,
      '初中': 6,
      '不限': 7
    },
    jobTime: {
      '无经验': 1,
      '一年以下': 2,
      '一年至三年': 3,
      '三年以上': 4
    }
  },
  sex: [{
    flex: 1,
    values: ['男', '女'],
    textAlign: 'center',
    defaultIndex: 0
  }],
  edu: [{
    flex: 1,
    values: [
      '不限',
      '初中',
      '高中',
      '大专',
      '大学'
    ],
    textAlign: 'center',
    defaultIndex: 0
  }],
  jobTime: [{
    flex: 1,
    values: [
      '无经验',
      '1年以下',
      '1-3年',
      '3年以上'
    ],
    textAlign: 'center',
    defaultIndex: 0
  }],
  introduction: [{
    flex: 1,
    values: ['我想挣钱', '我想学知识，长知识', '我想边工作，边玩'],
    textAlign: 'center',
    defaultIndex: 0
  }],
  salary: [{
    flex: 1,
    values: ['2000-2500', '2500-3000', '3000-3500', '3500-4000'],
    textAlign: 'center',
    defaultIndex: 0
  }],
  jobAccommodation: [{
    flex: 1,
    values: ['包吃住', '包吃 不包住', '包住 不包吃', '不包吃住'],
    textAlign: 'center',
    defaultIndex: 0
  }]

}
