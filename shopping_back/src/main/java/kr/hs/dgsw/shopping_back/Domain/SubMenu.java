package kr.hs.dgsw.shopping_back.Domain;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class SubMenu {
    private Long id;
    private Long menuId;
    private String name;
}
