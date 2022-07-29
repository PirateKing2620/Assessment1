
let password = 'This is Successful 77'

let yay = '{__      {__      {_       {__      {__\n' + ' {__    {__      {_ __      {__    {__ \n' + '  {__ {__       {_  {__      {__ {__   \n' + '    {__        {__   {__       {__     \n' + '    {__       {______ {__      {__     \n' + '    {__      {__       {__     {__     \n' + '    {__     {__         {__    {__     \n'
let no = '{___     {__    {____     \n' + '{_ {__   {__  {__    {__  \n' + '{__ {__  {__{__        {__\n' + '{__  {__ {__{__        {__\n' + '{__   {_ {__{__        {__\n' + '{__    {_ __  {__     {__ \n' + '{__      {__    {____     \n'


if (password.length >= 10 && password.length <= 25 && /\d/.test(password) === true && /[a-zA-Z]/.test(password) === true) {
    console.log(yay)
    console.log('success')
} else {
    console.log(no)
    console.log('Fail')
}

console.log(password.length)


// Extra
// I used the Art on both pass and fail
// The password has to be within 25 characters