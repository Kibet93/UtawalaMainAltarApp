import Error400 from '../errors/Error400';
import SequelizeRepository from '../database/repositories/sequelizeRepository';
import { IServiceOptions } from './IServiceOptions';
import MembersRepository from '../database/repositories/membersRepository';
import CategoryRepository from '../database/repositories/categoryRepository';
import AccountabilityGroupsRepository from '../database/repositories/accountabilityGroupsRepository';
import HomeFellowshipsRepository from '../database/repositories/homeFellowshipsRepository';
import UserRepository from '../database/repositories/userRepository';

export default class MembersService {
  options: IServiceOptions;

  constructor(options) {
    this.options = options;
  }

  async create(data) {
    const transaction = await SequelizeRepository.createTransaction(
      this.options.database,
    );

    try {
      data.category = await CategoryRepository.filterIdInTenant(data.category, { ...this.options, transaction });
      data.accountabilityGroup = await AccountabilityGroupsRepository.filterIdInTenant(data.accountabilityGroup, { ...this.options, transaction });
      data.homeFellowship = await HomeFellowshipsRepository.filterIdInTenant(data.homeFellowship, { ...this.options, transaction });
      data.email = await UserRepository.filterIdInTenant(data.email, { ...this.options, transaction });

      const record = await MembersRepository.create(data, {
        ...this.options,
        transaction,
      });

      await SequelizeRepository.commitTransaction(
        transaction,
      );

      return record;
    } catch (error) {
      await SequelizeRepository.rollbackTransaction(
        transaction,
      );

      SequelizeRepository.handleUniqueFieldError(
        error,
        this.options.language,
        'members',
      );

      throw error;
    }
  }

  async update(id, data) {
    const transaction = await SequelizeRepository.createTransaction(
      this.options.database,
    );

    try {
      data.category = await CategoryRepository.filterIdInTenant(data.category, { ...this.options, transaction });
      data.accountabilityGroup = await AccountabilityGroupsRepository.filterIdInTenant(data.accountabilityGroup, { ...this.options, transaction });
      data.homeFellowship = await HomeFellowshipsRepository.filterIdInTenant(data.homeFellowship, { ...this.options, transaction });
      data.email = await UserRepository.filterIdInTenant(data.email, { ...this.options, transaction });

      const record = await MembersRepository.update(
        id,
        data,
        {
          ...this.options,
          transaction,
        },
      );

      await SequelizeRepository.commitTransaction(
        transaction,
      );

      return record;
    } catch (error) {
      await SequelizeRepository.rollbackTransaction(
        transaction,
      );

      SequelizeRepository.handleUniqueFieldError(
        error,
        this.options.language,
        'members',
      );

      throw error;
    }
  }

  async destroyAll(ids) {
    const transaction = await SequelizeRepository.createTransaction(
      this.options.database,
    );

    try {
      for (const id of ids) {
        await MembersRepository.destroy(id, {
          ...this.options,
          transaction,
        });
      }

      await SequelizeRepository.commitTransaction(
        transaction,
      );
    } catch (error) {
      await SequelizeRepository.rollbackTransaction(
        transaction,
      );
      throw error;
    }
  }

  async findById(id) {
    return MembersRepository.findById(id, this.options);
  }

  async findAllAutocomplete(search, limit) {
    return MembersRepository.findAllAutocomplete(
      search,
      limit,
      this.options,
    );
  }

  async findAndCountAll(args) {
    return MembersRepository.findAndCountAll(
      args,
      this.options,
    );
  }

  async import(data, importHash) {
    if (!importHash) {
      throw new Error400(
        this.options.language,
        'importer.errors.importHashRequired',
      );
    }

    if (await this._isImportHashExistent(importHash)) {
      throw new Error400(
        this.options.language,
        'importer.errors.importHashExistent',
      );
    }

    const dataToCreate = {
      ...data,
      importHash,
    };

    return this.create(dataToCreate);
  }

  async _isImportHashExistent(importHash) {
    const count = await MembersRepository.count(
      {
        importHash,
      },
      this.options,
    );

    return count > 0;
  }
}
