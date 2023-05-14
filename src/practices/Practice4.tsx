export const Practice4 = () => {
  const calcTotalFee = (num: number) => {
    const total = num * 1.1;
    console.log(total);
  };
  const onClickPractice = () => calcTotalFee(1000);
  return (
    <div>
      <p>4 tsconfig.json</p>
      <button onClick={onClickPractice}>run4</button>
    </div>
  );
};
