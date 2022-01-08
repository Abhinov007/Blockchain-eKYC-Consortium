//  the address of the smart contract

var contractAddress = '0x05d5db1835be3bd33551f2c0e5d654d44810ac0c';

//   Abstract Binary Interface of the contract code

var abi = [{"constant":false,"inputs":[{"name":"ethAcc","type":"address"}],"name":"getBankName","outputs":[{"name":"","type":"string"}],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"Uname","type":"string"}],"name":"viewCustomer","outputs":[{"name":"","type":"string"}],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"Uname","type":"string"},{"name":"bankAddress","type":"address"}],"name":"ifAllowed","outputs":[{"name":"","type":"bool"}],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"Uname","type":"string"},{"name":"DataHash","type":"string"}],"name":"addCustomer","outputs":[{"name":"","type":"uint256"}],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"Uname","type":"string"},{"name":"bankAddress","type":"address"},{"name":"ifallowed","type":"bool"}],"name":"allowBank","outputs":[],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"Uname","type":"string"},{"name":"password","type":"string"}],"name":"checkCustomer","outputs":[{"name":"","type":"bool"}],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"ethAcc","type":"address"}],"name":"getBankKYC","outputs":[{"name":"","type":"uint256"}],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"uname","type":"string"}],"name":"getBankEth","outputs":[{"name":"","type":"address"}],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"bankAddress","type":"address"},{"name":"ifAdded","type":"bool"}],"name":"updateRating","outputs":[{"name":"","type":"uint256"}],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"Uname","type":"string"},{"name":"bankAddress","type":"address"}],"name":"addRequest","outputs":[],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"Uname","type":"string"}],"name":"getCustomerRating","outputs":[{"name":"","type":"uint256"}],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"eth","type":"address"}],"name":"removeBank","outputs":[{"name":"","type":"uint256"}],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"ethAcc","type":"address"}],"name":"getBankReg","outputs":[{"name":"","type":"string"}],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"ethAcc","type":"address"}],"name":"getBankRating","outputs":[{"name":"","type":"uint256"}],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"Uname","type":"string"},{"name":"ifIncrease","type":"bool"}],"name":"updateRatingCustomer","outputs":[{"name":"","type":"uint256"}],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"Uname","type":"string"},{"name":"password","type":"address"}],"name":"checkBank","outputs":[{"name":"","type":"string"}],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"Uname","type":"string"},{"name":"ind","type":"uint256"}],"name":"getBankRequests","outputs":[{"name":"","type":"address"}],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"Uname","type":"string"},{"name":"password","type":"string"}],"name":"setPassword","outputs":[{"name":"","type":"bool"}],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"uname","type":"string"},{"name":"eth","type":"address"},{"name":"regNum","type":"string"}],"name":"addBank","outputs":[{"name":"","type":"uint256"}],"payable":true,"type":"function"},{"constant":false,"inputs":[],"name":"isPartOfOrg","outputs":[{"name":"","type":"bool"}],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"Uname","type":"string"}],"name":"getCustomerBankRating","outputs":[{"name":"","type":"uint256"}],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"Uname","type":"string"},{"name":"DataHash","type":"string"}],"name":"modifyCustomer","outputs":[{"name":"","type":"uint256"}],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"Uname","type":"string"}],"name":"getCustomerBankName","outputs":[{"name":"","type":"string"}],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"Uname","type":"string"}],"name":"removeCustomer","outputs":[{"name":"","type":"uint256"}],"payable":true,"type":"function"}];

//  binary information of the code

var binaryData = '6060604052341561000f57600080fd5b5b6134ca8061001f6000396000f3006060604052361561013c576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806301da7b3114610141578063107925bb146101e95780631cfb7c9a146102b55780633190abc01461033e57806339b83b68146103e75780634b726f61146104635780634ec2b417146105105780635b3de1c8146105525780637d2f42c3146105e45780638873704c146106315780638eafe0f0146106a25780639649650c146107085780639ac3fce61461074a578063b8144a72146107f2578063bbd4edb114610834578063c17d8720146108a5578063c71029e114610990578063ca38649614610a2b578063ccfa8e7114610ad8578063d06760da14610ba0578063e979bac114610bc2578063f72860ca14610c28578063f9dc079314610cd1578063fc55ea9d14610d9d575b600080fd5b61016d600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610e03565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101ae5780820151818401525b602081019050610192565b50505050905090810190601f1680156101db5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610239600480803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050610fa5565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561027a5780820151818401525b60208101905061025e565b50505050905090810190601f1680156102a75780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610324600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061114d565b604051808215151515815260200191505060405180910390f35b6103d1600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190505061126a565b6040518082815260200191505060405180910390f35b610461600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035151590602001909190505061147a565b005b6104f6600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919050506116d7565b604051808215151515815260200191505060405180910390f35b61053c600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506117af565b6040518082815260200191505060405180910390f35b6105a2600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190505061187f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61061b600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035151590602001909190505061193c565b6040518082815260200191505060405180910390f35b6106a0600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611ba2565b005b6106f2600480803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050611d73565b6040518082815260200191505060405180910390f35b610734600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611dfd565b6040518082815260200191505060405180910390f35b610776600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061200c565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156107b75780820151818401525b60208101905061079b565b50505050905090810190601f1680156107e45780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61081e600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506121ae565b6040518082815260200191505060405180910390f35b61088f600480803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091908035151590602001909190505061227e565b6040518082815260200191505060405180910390f35b610914600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506124d2565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156109555780820151818401525b602081019050610939565b50505050905090810190601f1680156109825780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6109e9600480803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091908035906020019091905050612623565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610abe600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190505061273b565b604051808215151515815260200191505060405180910390f35b610b8a600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050612846565b6040518082815260200191505060405180910390f35b610ba861298d565b604051808215151515815260200191505060405180910390f35b610c12600480803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050612a38565b6040518082815260200191505060405180910390f35b610cbb600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050612ae6565b6040518082815260200191505060405180910390f35b610d21600480803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050612c01565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610d625780820151818401525b602081019050610d46565b50505050905090810190601f168015610d8f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610ded600480803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050612cb5565b6040518082815260200191505060405180910390f35b610e0b613086565b60008090505b600180549050811015610f66578273ffffffffffffffffffffffffffffffffffffffff16600182815481101515610e4457fe5b906000526020600020906005020160005b5060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610f5a57600181815481101515610ea557fe5b906000526020600020906005020160005b506000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610f4e5780601f10610f2357610100808354040283529160200191610f4e565b820191906000526020600020905b815481529060010190602001808311610f3157829003601f168201915b50505050509150610f9f565b5b806001019050610e11565b6040805190810160405280600481526020017f6e756c6c0000000000000000000000000000000000000000000000000000000081525091505b50919050565b610fad613086565b6000610fb761298d565b1515610ffa576040805190810160405280600e81526020017f4163636573732064656e696564210000000000000000000000000000000000008152509150611147565b600090505b60008054905081101561110e5761103960008281548110151561101e57fe5b906000526020600020906006020160005b5060000184612efc565b156111025760008181548110151561104d57fe5b906000526020600020906006020160005b506001018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156110f65780601f106110cb576101008083540402835291602001916110f6565b820191906000526020600020905b8154815290600101906020018083116110d957829003601f168201915b50505050509150611147565b5b806001019050610fff565b6040805190810160405280601f81526020017f437573746f6d6572206e6f7420666f756e6420696e206461746162617365210081525091505b50919050565b600080600090505b60028054905081101561125e5761118f60028281548110151561117457fe5b906000526020600020906002020160005b5060000185612efc565b801561120a57508273ffffffffffffffffffffffffffffffffffffffff166002828154811015156111bc57fe5b906000526020600020906002020160005b5060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b8015611244575060028181548110151561122057fe5b906000526020600020906002020160005b5060010160149054906101000a900460ff165b156112525760019150611263565b5b806001019050611155565b600091505b5092915050565b60008061127561298d565b15156112845760079150611473565b600090505b6000805490508110156112dd576112c36000828154811015156112a857fe5b906000526020600020906006020160005b5060000185612efc565b156112d15760029150611473565b5b806001019050611289565b600080548091906001016112f1919061309a565b50600160008054905010156113095760019150611473565b60c06040519081016040528085815260200184815260200160648152602001600081526020013373ffffffffffffffffffffffffffffffffffffffff1681526020016040805190810160405280600481526020017f6e756c6c00000000000000000000000000000000000000000000000000000000815250815250600060016000805490500381548110151561139b57fe5b906000526020600020906006020160005b5060008201518160000190805190602001906113c99291906130cc565b5060208201518160010190805190602001906113e69291906130cc565b50604082015181600201556060820151816003015560808201518160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060a082015181600501908051906020019061145e9291906130cc565b5090505061146d33600161193c565b50600091505b5092915050565b600080600091505b6002805490508210156116cf576114bc6002838154811015156114a157fe5b906000526020600020906002020160005b5060000186612efc565b801561153757508373ffffffffffffffffffffffffffffffffffffffff166002838154811015156114e957fe5b906000526020600020906002020160005b5060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b156116c357821561158457600160028381548110151561155357fe5b906000526020600020906002020160005b5060010160146101000a81548160ff0219169083151502179055506116be565b8190505b60028080549050038110156116a7576002600183018154811015156115a957fe5b906000526020600020906002020160005b506002838154811015156115ca57fe5b906000526020600020906002020160005b506000820181600001908054600181600116156101000203166002900461160392919061314c565b506001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001820160149054906101000a900460ff168160010160146101000a81548160ff0219169083151502179055509050505b806001019050611588565b60028054809190600190036116bc91906131d3565b505b6116d0565b5b816001019150611482565b5b5050505050565b600080600090505b6000805490508110156117a3576117196000828154811015156116fe57fe5b906000526020600020906006020160005b5060000185612efc565b801561174e575061174d60008281548110151561173257fe5b906000526020600020906006020160005b5060050184612efc565b5b1561175c57600191506117a8565b61178960008281548110151561176e57fe5b906000526020600020906006020160005b5060000185612efc565b1561179757600091506117a8565b5b8060010190506116df565b600091505b5092915050565b600080600090505b600180549050811015611874578273ffffffffffffffffffffffffffffffffffffffff166001828154811015156117ea57fe5b906000526020600020906005020160005b5060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156118685760018181548110151561184b57fe5b906000526020600020906005020160005b50600301549150611879565b5b8060010190506117b7565b600091505b50919050565b600080600090505b60018054905081101561191e576118c16001828154811015156118a657fe5b906000526020600020906005020160005b5060000184612efc565b15611912576001818154811015156118d557fe5b906000526020600020906005020160005b5060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169150611936565b5b806001019050611887565b7314e041521a40e32ed88b22c0f32469f5406d757a91505b50919050565b600080600090505b600180549050811015611b96578373ffffffffffffffffffffffffffffffffffffffff1660018281548110151561197757fe5b906000526020600020906005020160005b5060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415611b8a578215611ac4576001818154811015156119de57fe5b906000526020600020906005020160005b5060030160008154809291906001019190505550600181815481101515611a1257fe5b906000526020600020906005020160005b50600301546064811515611a3357fe5b04600182815481101515611a4357fe5b906000526020600020906005020160005b50600201600082825401925050819055506101f4600182815481101515611a7757fe5b906000526020600020906005020160005b50600201541115611abf576101f4600182815481101515611aa557fe5b906000526020600020906005020160005b50600201819055505b611b81565b60018082815481101515611ad457fe5b906000526020600020906005020160005b5060030154016064811515611af657fe5b04600182815481101515611b0657fe5b906000526020600020906005020160005b50600201600082825403925050819055506000600182815481101515611b3957fe5b906000526020600020906005020160005b50600201541015611b80576000600182815481101515611b6657fe5b906000526020600020906005020160005b50600201819055505b5b60009150611b9b565b5b806001019050611944565b600191505b5092915050565b60008090505b600280549050811015611c7357611be2600282815481101515611bc757fe5b906000526020600020906002020160005b5060000184612efc565b8015611c5d57508173ffffffffffffffffffffffffffffffffffffffff16600282815481101515611c0f57fe5b906000526020600020906002020160005b5060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b15611c6757611d6e565b5b806001019050611ba8565b60028054809190600101611c8791906131d3565b506060604051908101604052808481526020018373ffffffffffffffffffffffffffffffffffffffff168152602001600015158152506002600160028054905003815481101515611cd457fe5b906000526020600020906002020160005b506000820151816000019080519060200190611d029291906130cc565b5060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160010160146101000a81548160ff0219169083151502179055509050505b505050565b600080600090505b600080549050811015611df257611db5600082815481101515611d9a57fe5b906000526020600020906006020160005b5060000184612efc565b15611de657600081815481101515611dc957fe5b906000526020600020906006020160005b50600201549150611df7565b5b806001019050611d7b565b600091505b50919050565b6000806000611e0a61298d565b1515611e195760079250612005565b600091505b600180549050821015612000578373ffffffffffffffffffffffffffffffffffffffff16600183815481101515611e5157fe5b906000526020600020906005020160005b5060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415611ff4576001820190505b600180549050811015611fd557600182815481101515611ec657fe5b906000526020600020906005020160005b506001808403815481101515611ee957fe5b906000526020600020906005020160005b5060008201816000019080546001816001161561010002031660029004611f2292919061314c565b506001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600282015481600201556003820154816003015560048201816004019080546001816001161561010002031660029004611fc592919061314c565b509050505b806001019050611eaa565b6001805480919060019003611fea9190613205565b5060009250612005565b5b816001019150611e1e565b600192505b5050919050565b612014613086565b60008090505b60018054905081101561216f578273ffffffffffffffffffffffffffffffffffffffff1660018281548110151561204d57fe5b906000526020600020906005020160005b5060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415612163576001818154811015156120ae57fe5b906000526020600020906005020160005b506004018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156121575780601f1061212c57610100808354040283529160200191612157565b820191906000526020600020905b81548152906001019060200180831161213a57829003601f168201915b505050505091506121a8565b5b80600101905061201a565b6040805190810160405280600481526020017f6e756c6c0000000000000000000000000000000000000000000000000000000081525091505b50919050565b600080600090505b600180549050811015612273578273ffffffffffffffffffffffffffffffffffffffff166001828154811015156121e957fe5b906000526020600020906005020160005b5060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156122675760018181548110151561224a57fe5b906000526020600020906005020160005b50600201549150612278565b5b8060010190506121b6565b600091505b50919050565b600080600090505b6000805490508110156124c6576122c06000828154811015156122a557fe5b906000526020600020906006020160005b5060000185612efc565b156124ba5782156123c0576000818154811015156122da57fe5b906000526020600020906006020160005b506003016000815480929190600101919050555060008181548110151561230e57fe5b906000526020600020906006020160005b5060030154606481151561232f57fe5b0460008281548110151561233f57fe5b906000526020600020906006020160005b50600201600082825401925050819055506101f460008281548110151561237357fe5b906000526020600020906006020160005b506002015411156123bb576101f46000828154811015156123a157fe5b906000526020600020906006020160005b50600201819055505b6124b1565b6000818154811015156123cf57fe5b906000526020600020906006020160005b506003016000815480929190600190039190505550600160008281548110151561240657fe5b906000526020600020906006020160005b506003015401606481151561242857fe5b0460008281548110151561243857fe5b906000526020600020906006020160005b50600201600082825403925050819055506000808281548110151561246a57fe5b906000526020600020906006020160005b506002015410156124b0576000808281548110151561249657fe5b906000526020600020906006020160005b50600201819055505b5b600091506124cb565b5b806001019050612286565b600191505b5092915050565b6124da613086565b60008090505b6001805490508110156125e3578273ffffffffffffffffffffffffffffffffffffffff1660018281548110151561251357fe5b906000526020600020906005020160005b5060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16148015612595575061259460018281548110151561257957fe5b906000526020600020906005020160005b5060000185612efc565b5b156125d7576040805190810160405280600181526020017f3000000000000000000000000000000000000000000000000000000000000000815250915061261c565b5b8060010190506124e0565b6040805190810160405280600481526020017f6e756c6c0000000000000000000000000000000000000000000000000000000081525091505b5092915050565b6000806000809150600090505b60028054905081101561271b5761266a60028281548110151561264f57fe5b906000526020600020906002020160005b5060000186612efc565b801561267557508382145b80156126b657506000151560028281548110151561268f57fe5b906000526020600020906002020160005b5060010160149054906101000a900460ff161515145b15612707576002818154811015156126ca57fe5b906000526020600020906002020160005b5060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169250612733565b81806001019250505b806001019050612630565b7314e041521a40e32ed88b22c0f32469f5406d757a92505b505092915050565b600080600090505b60008054905081101561283a5761277d60008281548110151561276257fe5b906000526020600020906006020160005b5060000185612efc565b80156127e757506127e660008281548110151561279657fe5b906000526020600020906006020160005b506005016040805190810160405280600481526020017f6e756c6c00000000000000000000000000000000000000000000000000000000815250612efc565b5b1561282e57826000828154811015156127fc57fe5b906000526020600020906006020160005b506005019080519060200190612824929190613237565b506001915061283f565b5b806001019050612743565b600091505b5092915050565b600080600180549050148061285f575061285e61298d565b5b1561298157600180548091906001016128789190613205565b5060a0604051908101604052808581526020018473ffffffffffffffffffffffffffffffffffffffff16815260200160c8815260200160008152602001838152506001808080549050038154811015156128ce57fe5b906000526020600020906005020160005b5060008201518160000190805190602001906128fc9291906130cc565b5060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550604082015181600201556060820151816003015560808201518160040190805190602001906129749291906130cc565b5090505060009050612986565b600790505b9392505050565b600080600090505b600180549050811015612a2f573373ffffffffffffffffffffffffffffffffffffffff166001828154811015156129c857fe5b906000526020600020906005020160005b5060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415612a235760019150612a34565b5b806001019050612995565b600091505b5090565b600080600090505b600080549050811015612adf57612a7a600082815481101515612a5f57fe5b906000526020600020906006020160005b5060000184612efc565b15612ad357612acc600082815481101515612a9157fe5b906000526020600020906006020160005b5060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166121ae565b9150612ae0565b5b806001019050612a40565b5b50919050565b600080612af161298d565b1515612b005760079150612bfa565b600090505b600080549050811015612bf557612b3f600082815481101515612b2457fe5b906000526020600020906006020160005b5060000185612efc565b15612be95782600082815481101515612b5457fe5b906000526020600020906006020160005b506001019080519060200190612b7c929190613237565b5033600082815481101515612b8d57fe5b906000526020600020906006020160005b5060040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060009150612bfa565b5b806001019050612b05565b600191505b5092915050565b612c09613086565b60008090505b600080549050811015612cae57612c49600082815481101515612c2e57fe5b906000526020600020906006020160005b5060000184612efc565b15612ca257612c9b600082815481101515612c6057fe5b906000526020600020906006020160005b5060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16610e03565b9150612caf565b5b806001019050612c0f565b5b50919050565b600080600080612cc361298d565b1515612cd25760079350612ef4565b600092505b600080549050831015612eef57612d11600084815481101515612cf657fe5b906000526020600020906006020160005b5060000186612efc565b15612ee357600083815481101515612d2557fe5b906000526020600020906006020160005b5060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1691506001830190505b600080549050811015612eb857600083815481101515612d8057fe5b906000526020600020906006020160005b50600060018503815481101515612da457fe5b906000526020600020906006020160005b5060008201816000019080546001816001161561010002031660029004612ddd92919061314c565b5060018201816001019080546001816001161561010002031660029004612e0592919061314c565b5060028201548160020155600382015481600301556004820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060058201816005019080546001816001161561010002031660029004612ea892919061314c565b509050505b806001019050612d64565b6000805480919060019003612ecd919061309a565b50612ed982600061193c565b5060009350612ef4565b5b826001019250612cd7565b600193505b505050919050565b600080612f076132b7565b6000859250849150815183805460018160011615610100020316600290049050141515612f37576000935061307d565b600090505b82805460018160011615610100020316600290049050811015613078578181815181101515612f6757fe5b9060200101517f010000000000000000000000000000000000000000000000000000000000000090047f0100000000000000000000000000000000000000000000000000000000000000027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191683828154600181600116156101000203166002900481101515612ff357fe5b8154600116156130125790600052602060002090602091828204019190065b9054901a7f0100000000000000000000000000000000000000000000000000000000000000027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614151561306a576000935061307d565b5b8080600101915050612f3c565b600193505b50505092915050565b602060405190810160405280600081525090565b8154818355818115116130c7576006028160060283600052602060002091820191016130c691906132cb565b5b505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061310d57805160ff191683800117855561313b565b8280016001018555821561313b579182015b8281111561313a57825182559160200191906001019061311f565b5b5090506131489190613351565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061318557805485556131c2565b828001600101855582156131c257600052602060002091601f016020900482015b828111156131c15782548255916001019190600101906131a6565b5b5090506131cf9190613351565b5090565b815481835581811511613200576002028160020283600052602060002091820191016131ff9190613376565b5b505050565b8154818355818115116132325760050281600502836000526020600020918201910161323191906133e0565b5b505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061327857805160ff19168380011785556132a6565b828001600101855582156132a6579182015b828111156132a557825182559160200191906001019061328a565b5b5090506132b39190613351565b5090565b602060405190810160405280600081525090565b61334e91905b8082111561334a57600080820160006132ea9190613456565b6001820160006132fa9190613456565b600282016000905560038201600090556004820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556005820160006133419190613456565b506006016132d1565b5090565b90565b61337391905b8082111561336f576000816000905550600101613357565b5090565b90565b6133dd91905b808211156133d957600080820160006133959190613456565b6001820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001820160146101000a81549060ff02191690555060020161337c565b5090565b90565b61345391905b8082111561344f57600080820160006133ff9190613456565b6001820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600282016000905560038201600090556004820160006134469190613456565b506005016133e6565b5090565b90565b50805460018160011615610100020316600290046000825580601f1061347c575061349b565b601f01602090049060005260206000209081019061349a9190613351565b5b505600a165627a7a72305820ea6fd717f59d11a3fe7d87e8209cb9de938994c70af8d03bd4050d05fb6967e00029';

//  IDs of all elements of the KYC form

var allIds = [

    "username",
    "first_name",
    "middle_name",
    "last_name",
    "occupation",
    "income_range",
    "DOB",
    "gender_m",
    "gender_f",
    "address",
    "phone_1",
    "phone_2",
    "email",
    "country_res"

];
