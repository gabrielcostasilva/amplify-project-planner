import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Projects {
  readonly id: string;
  readonly title?: string;
  readonly description?: string;
  readonly complete?: boolean;
  constructor(init: ModelInit<Projects>);
  static copyOf(source: Projects, mutator: (draft: MutableModel<Projects>) => MutableModel<Projects> | void): Projects;
}