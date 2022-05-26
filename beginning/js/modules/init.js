export async function fetchEmployees() {
    try {
        const response = await fetch('/beginning/data/employees.json')
        const users = await response.json()
        return users
    } catch (error) {
        console.error(error)
    }
}

