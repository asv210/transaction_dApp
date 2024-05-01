const abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_admins",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "admin",
        type: "address",
      },
    ],
    name: "addAdmins",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAdmins",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllTransactions",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "sender",
            type: "string",
          },
          {
            internalType: "string",
            name: "receiver",
            type: "string",
          },
          {
            internalType: "string",
            name: "amount",
            type: "string",
          },
          {
            internalType: "string",
            name: "remark",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
        ],
        internalType: "struct Transactions.TransferStruct[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "key",
        type: "uint256",
      },
    ],
    name: "getTransaction",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "sender",
            type: "string",
          },
          {
            internalType: "string",
            name: "receiver",
            type: "string",
          },
          {
            internalType: "string",
            name: "amount",
            type: "string",
          },
          {
            internalType: "string",
            name: "remark",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
        ],
        internalType: "struct Transactions.TransferStruct",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "sender",
        type: "string",
      },
      {
        internalType: "string",
        name: "receiver",
        type: "string",
      },
      {
        internalType: "string",
        name: "amount",
        type: "string",
      },
      {
        internalType: "string",
        name: "remark",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "sendMoney",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
export default abi;
