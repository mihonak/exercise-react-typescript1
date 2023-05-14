export const Practice1 = () => {
  const calcTotalFee = (num: number) => {
    const total = num * 1.1;
    console.log(total);
  };
  const onClickPractice = () => calcTotalFee(1000);
  return (
    <div>
      <p>1 引数の型指定</p>
      <button onClick={onClickPractice}>run1</button>
    </div>
  );
};
