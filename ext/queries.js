export const getHabits = async (args, context) => {
    return context.entities.Habit.findMany({
        orderBy: [
            {
                name: 'asc'
            }
        ]
    })
}

export const getHabitByName = async (args, context) => {
    return context.entities.Habit.findUnique({
        where: {
            name: args.name
        }
    })
}

export const getDates = async (args, context) => {
    return context.entities.Date.findMany({
        orderBy: [
            {
                at: 'desc'
            }
        ]
    })
}

export const getDatesByMonth = async (args, context) => {
    return context.entities.Date.findMany({
        where: {
            at: {
                gte: new Date(args.month + "-01"),
                lt: new Date((args.month + 1) + "-01")
            }
        },
        orderBy: [
            {
                at: 'desc'
            }
        ]
    })
}

export const getHabitDatesByMonth = async (args, context) => {
    return context.entities.HabitDate.findMany({
        where: {
            dateAt: {
                gte: new Date(args.month + "-01"),
                lt: new Date((args.month + 1) + "-01")
            },
        },
        orderBy: [
            {
                habitName: 'asc'
            }
        ]
    })
}