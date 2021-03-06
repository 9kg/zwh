let sayings = ['知识，当智慧无力驾驭它时，会像一匹倔犟的马掀翻它的骑手。 —— 佚名',
'自称好，烂稻草。 —— 佚名',
'笔勤能使手快，多练能使手巧—— 民谚',
'仁者谓其中心欣然爱人。 —— 《韩非子》',
'保留某种不完善会使事物显得有趣，并使人感觉到还有一点发展的空间—— 吉田兼好',
'怠慢则不能不开精，险躁则不能理性。 —— 诸葛亮',
'命运的变化犹如月之圆缺，对智者无妨害。 —— 富兰克林',
'智育只能是德育的辅助品，学问只能作为辅佐品德之用，对于心地良好的人来说，学问对于德行与智慧都有帮助；对于心地不是良好的人来说，学问就会使他们变得更坏。 —— 洛克',
'艺术是活的科学—— 科克托',
'任何东西都敌不过真实。 —— 狄德罗',
'谦逊是反省的最高贵的收获，它建立起对抗骄傲的防线。 —— 温刹斯基',
'怎样思想,就有怎样的生活—— 爱默生',
'纸牌是魔鬼的书籍—— 布尔沃·利顿',
'时间能缓解极度的悲痛—— 佚名',
'边学边问，才有学问。 —— 佚名',
'节约就是大收成。 —— 谚语',
'你若正直，不要怕人诽谤—— 萨迪',
'一个人没有朋友，就像生活里没有阳光。 —— 佚名',
'才有长短，取其长则不问其短；情有忠伪，信其忠则不疑其伪。 —— 王安石',
'本能是不受自我意识控制的智能—— 约·斯特林',
'凡人立于天地间，遇事必当之以“诚”，而后人始信其为人，乃得有为人之价值。尚诈术者，何能立名建业。 —— 吕鹏搏',
'虽然人人都企求得很多，但所需要的却是微乎其微。因为人生是短暂的，人的命运是有限的。 —— 歌德',
'谬误行得通，真理就行不通—— 日本',
'人的差异产生于业余时间—— 佚名',
'人类的伟大不在于他们在做什么，而在于他们想做什么—— 罗·勃朗宁',
'人多力量大，柴多火焰高—— 民谚',
'美容不是奶油，不能涂上面包—— 土耳其',
'入妙文章本平淡，等闲言语变瑰琦—— 宋·戴复古',
'老生常谈中蕴含的无限的深刻的思想，是由蚂蚁世世代代掘成的洞穴—— 波德莱尔',
'一人难顺百人意，一墙难挡八面风。 —— 佚名',
'顽强能引导人们走向幸福—— 杰克·伦敦',
'不愿加鞍的马，不得吃燕麦—— 英国',
'痒……也是一种快感—— 培根',
'人怕老来穷，苗怕钻心虫。 —— 佚名',
'射人先射马，擒贼先擒王—— 民谚',
'人应当使自己的面貌日新月异，要像坚硬而有韧性的金属那样经得起任何斗争的锻炼。 —— 列斯科夫',
'每一样工作都蕴藏着诉说不尺的乐趣，只是有的人不知道怎样去发现它罢了—— 佚名',
'埋在地下的种子产生果实，却并不要求什么报酬。 —— 泰戈尔',
'才学识三长，识为尤重—— 清·刘熙载',
'聪明人克服谬误，从而走向真理；只有傻瓜才坚持自己的谬误。 —— 吕凯特',
'信仰有异于迷信，若坚信信仰甚至于迷信，则无异于破坏信仰。 —— 帕斯卡',
'青年是我们的未来，是我们的希望。 —— 斯大林',
'偷吃的肉，味道最香—— 塔西佗',
'要养成感知和观察高尚事物的习惯，以便从那种“高尚事物无法效仿”的借口中解脱出来。我们的心灵境界升高了，凝视神圣榜样的热情点燃了，我们就要设法见贤思齐了。 —— 卢梭',
'点燃蜡烛照亮他人者，也不会给自己带来黑暗。 —— 杰弗逊',
'全世界一切被压迫人民和被压迫民族联合起来，一切爱好和平国家要联合起来—— 毛泽东',
'历史使人贤明，诗造成气质高雅的人，数学使人高尚，自然哲学使人深沉，道德使人稳重，而伦理学和修辞学则使人善于争论。 —— 培根',
'追求真理比占有真理更加难能可贵。 —— 爱因斯坦',
'位卑未敢忘忧国—— 宋·陆游',
'我成功因为我志在成功！ —— 佚名'];
module.exports = () => {
  return sayings[Math.floor(Math.random()*sayings.length)];
}
