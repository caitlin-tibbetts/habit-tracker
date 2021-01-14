export const createHabit = async (args, context) => {
    return context.entities.Habit.create({
        data: {
            name: args.name, hDates: {
                create: [{at: Date()}]
            }
        }
    })
}