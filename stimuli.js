const practice_items = [

  {
    type: "moving-window",
    part: "spr",
    condition: "L2",
    id: 1,
    sentence: ['كان فيما مضى رجل وزوجته، وكان لديهما خاتم من الذهب.',
      'كان هذا خاتم حظ، وكل من يمتلكه يصبح لديه ما يكفي ليعيش،',
      'ولكنهم لم يعلموا بذلك وقاموا ببيع الخاتم بثمن زهيد.',
      'وبمجرد ذهاب الخاتم أخذ فقرهم يزداد شيئا فشيئا.'].join('\n'),
    question: "هل الخاتم من الذهب؟",
    choices: ['نعم', 'لا'],
    correct: 0,
  },
  {
    type: "moving-window",
    part: "spr",
    condition: "L3",
    id: 2,
    sentence:  [' الناس جميعا سواء أمام القانون، وهم يتساوون في حق التمتع',
    ' بحماية القانون دونما تمييز، كما يتساوون في حق التمتع بالحماية',
    ' من أي تمييز ينتهك هذا الإعلان ومن أي تحريض على مثل هذا',
    ' التمييز.'].join('\n'),
    question: "هل الناس جميعا يتساوون أمام القانون ؟",
    choices: ['نعم', 'لا'],
    correct: 0,
  },
];

