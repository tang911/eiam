/*
 * eiam-console - Employee Identity and Access Management
 * Copyright © 2022-Present Jinan Yuanchuang Network Technology Co., Ltd. (support@topiam.cn)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
package cn.topiam.employee.console.controller.app;

import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import com.google.common.collect.Lists;

import cn.topiam.employee.audit.annotation.Audit;
import cn.topiam.employee.audit.event.type.EventType;
import cn.topiam.employee.common.entity.account.query.UserGroupMemberListQuery;
import cn.topiam.employee.console.pojo.query.app.AppGroupAssociationListQuery;
import cn.topiam.employee.console.pojo.query.app.AppGroupListQuery;
import cn.topiam.employee.console.pojo.result.app.AppGroupGetResult;
import cn.topiam.employee.console.pojo.result.app.AppGroupListResult;
import cn.topiam.employee.console.pojo.result.app.AppListResult;
import cn.topiam.employee.console.pojo.save.app.AppGroupCreateParam;
import cn.topiam.employee.console.pojo.update.app.AppGroupUpdateParam;
import cn.topiam.employee.console.service.app.AppGroupService;
import cn.topiam.employee.support.demo.Preview;
import cn.topiam.employee.support.lock.Lock;
import cn.topiam.employee.support.repository.page.domain.Page;
import cn.topiam.employee.support.repository.page.domain.PageModel;
import cn.topiam.employee.support.result.ApiRestResult;

import lombok.AllArgsConstructor;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.constraints.NotEmpty;
import static cn.topiam.employee.common.constant.AppConstants.APP_PATH;

/**
 * 分组管理
 *
 * @author TopIAM
 * Created by support@topiam.cn on 2023/8/31 15:35
 */
@Validated
@Tag(name = "应用分组管理")
@RestController
@AllArgsConstructor
@RequestMapping(value = APP_PATH + "/group", produces = MediaType.APPLICATION_JSON_VALUE)
public class AppGroupController {

    /**
     * 获取应用分组列表
     *
     * @param page {@link PageModel}
     * @return {@link AppGroupListQuery}
     */
    @Operation(summary = "获取分组列表")
    @GetMapping(value = "/list")
    @PreAuthorize(value = "authenticated and @sae.hasAuthority(T(cn.topiam.employee.support.security.userdetails.UserType).ADMIN)")
    public ApiRestResult<Page<AppGroupListResult>> getAppGroupList(PageModel page,
                                                                   AppGroupListQuery query) {
        Page<AppGroupListResult> list = appGroupService.getAppGroupList(page, query);
        return ApiRestResult.<Page<AppGroupListResult>> builder().result(list).build();
    }

    /**
     * 创建应用分组
     *
     * @param param {@link AppGroupCreateParam}
     * @return {@link Boolean}
     */
    @Lock
    @Preview
    @Operation(summary = "创建应用分组")
    @Audit(type = EventType.ADD_APP_GROUP)
    @PostMapping(value = "/create")
    @PreAuthorize(value = "authenticated and @sae.hasAuthority(T(cn.topiam.employee.support.security.userdetails.UserType).ADMIN)")
    public ApiRestResult<Boolean> createAppGroup(@RequestBody @Validated AppGroupCreateParam param) {
        return ApiRestResult.<Boolean> builder().result(appGroupService.createAppGroup(param))
            .build();
    }

    /**
     * 修改应用分组
     *
     * @param param {@link AppGroupUpdateParam}
     * @return {@link Boolean}
     */
    @Lock
    @Preview
    @Operation(summary = "修改应用分组")
    @Audit(type = EventType.UPDATE_APP_GROUP)
    @PutMapping(value = "/update")
    @PreAuthorize(value = "authenticated and @sae.hasAuthority(T(cn.topiam.employee.support.security.userdetails.UserType).ADMIN)")
    public ApiRestResult<Boolean> updateAppGroup(@RequestBody @Validated AppGroupUpdateParam param) {
        return ApiRestResult.<Boolean> builder().result(appGroupService.updateAppGroup(param))
            .build();
    }

    /**
     * 删除应用分组
     *
     * @param id {@link Long}
     * @return {@link Boolean}
     */
    @Lock
    @Preview
    @Operation(summary = "删除应用分组")
    @Audit(type = EventType.DELETE_APP_GROUP)
    @DeleteMapping(value = "/delete/{id}")
    @PreAuthorize(value = "authenticated and @sae.hasAuthority(T(cn.topiam.employee.support.security.userdetails.UserType).ADMIN)")
    public ApiRestResult<Boolean> deleteAppGroup(@PathVariable(value = "id") String id) {
        return ApiRestResult.<Boolean> builder().result(appGroupService.deleteAppGroup(id)).build();
    }

    /**
     * 获取应用分组信息
     *
     * @param id {@link String}
     * @return {@link Boolean}
     */
    @Operation(summary = "获取应用分组信息")
    @GetMapping(value = "/get/{id}")
    @PreAuthorize(value = "authenticated and @sae.hasAuthority(T(cn.topiam.employee.support.security.userdetails.UserType).ADMIN)")
    public ApiRestResult<AppGroupGetResult> getAppGroup(@PathVariable(value = "id") String id) {
        AppGroupGetResult result = appGroupService.getAppGroup(id);
        return ApiRestResult.<AppGroupGetResult> builder().result(result).build();
    }

    /**
     * 移除应用组关联
     *
     * @param id {@link String}
     * @return {@link Boolean}
     */
    @Lock
    @Preview
    @Operation(summary = "移除应用组关联")
    @Audit(type = EventType.REMOVE_APP_GROUP_ASSOCIATION)
    @DeleteMapping(value = "/remove_association/{id}")
    @PreAuthorize(value = "authenticated and @sae.hasAuthority(T(cn.topiam.employee.support.security.userdetails.UserType).ADMIN)")
    public ApiRestResult<Boolean> removeAssociation(@PathVariable(value = "id") String id,
                                                    @NotEmpty(message = "应用ID不能为空") @Parameter(description = "应用ID集合") String[] appIds) {
        return ApiRestResult.<Boolean> builder()
            .result(appGroupService.batchRemoveAssociation(id, Lists.newArrayList(appIds))).build();
    }

    /**
     * 获取应用组内应用
     *
     * @param query {@link UserGroupMemberListQuery} 参数
     * @return {@link Boolean}
     */
    @Operation(summary = "获取应用组内应用")
    @GetMapping(value = "/{id}/app_list")
    @PreAuthorize(value = "authenticated and @sae.hasAuthority(T(cn.topiam.employee.support.security.userdetails.UserType).ADMIN)")
    public ApiRestResult<Page<AppListResult>> getAppGroupAssociationList(PageModel model,
                                                                         AppGroupAssociationListQuery query) {
        return ApiRestResult.<Page<AppListResult>> builder()
            .result(appGroupService.getAppGroupAssociationList(model, query)).build();
    }

    /**
     * AppGroupService
     */
    private final AppGroupService appGroupService;
}
