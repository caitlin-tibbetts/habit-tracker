export const createHabitDate = async (args, context) => {
    var today = new Date()
    return context.entities.HabitDate.create({
        data: {
            Habit: {
                create: {
                    name: args.name
                }
            },
            Date: {
                connectOrCreate: {
                    where: {
                        at: new Date(today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate())
                    },
                    create: {
                        at: new Date(today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate())
                    }
                }
            }
        }
    })
}

export const createNewDate = async (args, context) => {
    return context.entities.Habit.update({
        data: {
            at: new Date(today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate())
        }
    })
}