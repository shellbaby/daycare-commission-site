import { BaseCommand } from "@adonisjs/core/ace"
import type { CommandOptions } from "@adonisjs/core/types/ace"
import drive from "@adonisjs/drive/services/main"

export default class R2Connection extends BaseCommand {
    static commandName = "test:r2-connection"
    static description = "Test R2 connection"

    static options: CommandOptions = {
        startApp: true,
    }

    async run() {
        const fileName = "connection_test.txt"
        const content = `Test connection ${new Date().toISOString()}`

        try {
            this.logger.info("Writing test file")
            await drive.use("r2").put(fileName, content)
            this.logger.success("Write succeeded")

            this.logger.info("Reading test file")
            const isExisted = await drive.use("r2").exists(fileName)

            if (isExisted) {
                this.logger.success("Read succedded")
            } else {
                this.logger.error("File cannot be found")
            }

            this.logger.info("Deleting test file")
            await drive.use("r2").delete(fileName)
            this.logger.success("Delete succeeded")
        } catch (error) {
            this.logger.error("Connection failed")
            this.logger.error((error as Error).message)
        }
    }
}
