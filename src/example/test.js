//NezukoBot ChatBot Example by CookieGMVN

//Khai báo thư viện
const { NlpManager } = require("node-nlp")
const manager = new NlpManager()

//Khai báo file model
manager.addCorpus("./your-dir/main.json")
manager.train()
manager.save()

//Trích xuất data
const user = "cậu bao nhiêu tuổi"
const res = manager.process(user)

//In ra console
console.log(res.answer)
/*Output đúng:
tớ tầm tầm 18 tuổi nhá :)) HOẶC 
đúng ra thì bot sẽ không có tuổi nhưng tớ vẫn nghĩ tớ là gái 18 :))) HOẶC bất kì answer nào của intent myself.age trong file model
*/
