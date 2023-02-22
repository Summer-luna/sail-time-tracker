import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import {EmployeesService} from "./employees.service";
import {EmployeeModel} from "./model/employee.model";
import {EmployeeCreateInput} from "./dto/employee.dto";

@Resolver(() => EmployeeModel)
export class EmployeesResolver {

    constructor(private employeesService: EmployeesService) {
    }

    @Query(() => [EmployeeModel])
    async employees(): Promise<EmployeeModel[]>{
        return this.employeesService.getAllEmployees();
    }

    @Mutation(() => EmployeeModel)
    async addEmployee(@Args('employee') employee: EmployeeCreateInput): Promise<EmployeeModel>{
        return this.employeesService.addEmployee(employee)
    }


}
