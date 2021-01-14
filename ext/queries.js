export const getHabits = async (args, context) => {
    return context.entities.Habit.findMany({})
}

export const getDates = async (args, context) => {
    return context.entities.HDate.findMany({
        where: {
            habitId: args.habitId
        }
    })
}