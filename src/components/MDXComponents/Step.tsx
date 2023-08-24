type CustomStepProps = {
  number: number
  title: string
}
export const Step = (props: CustomStepProps) => {
  return (
    <div className="mx-3 flex flex-col items-center space-y-3 py-5 text-center md:flex-row md:space-x-5 md:space-y-0">
      <div className="grid h-10 w-10 place-items-center rounded-full border-4 border-gray-500 bg-gray-400 text-2xl font-bold text-white dark:border-gray-400 dark:bg-gray-600">
        {props.number}
      </div>
      <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
        {props.title}
      </h3>
    </div>
  )
}
