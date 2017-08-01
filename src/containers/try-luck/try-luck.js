/**
 * Containers / TryLuck
 */

import * as React from "react";
import { View } from 'react-native';
import { styles } from "./try-luck.styles";
import { LB } from '../../configs/index';
import { TemplateBuilder } from '../../styles/index';
import { TryLuckAction } from "../../actions/index";
import { CardList, PokerCoinButton } from "../../components/index";
import store from "../../stores/index";
import { Body, Button, Content, Text, Row, Col } from 'native-base';
import TimerMixin from 'react-timer-mixin';
import reactMixin from 'react-mixin';

export class TryLuck extends React.Component {

    constructor() {
        super();
        this.resetState();
        this.bindEvents();
    }

    get animationTime() {
        return 100;
    }

    resetState() {
        this.state = {
            firstLuckList: [],
            secondLuckList: []
        };
    }

    bindEvents() {
        this.bindLuckUpdateEvent();
    }

    bindLuckUpdateEvent() { 
        store.subscribe(() => {
            let { firstLuckList, secondLuckList } = this.state;

            if (firstLuckList.length > secondLuckList.length) {
                secondLuckList.unshift(store.getState().tryLuck.luck);
            } else {
                firstLuckList.unshift(store.getState().tryLuck.luck);
            }

            this.setState({
                firstLuckList,
                secondLuckList
            });
        });
    }
    
    /**
     * @description render the template
     */
    render() {
        let { firstLuckList, secondLuckList } = this.state;

        console.log(this.state);

        return TemplateBuilder.extend(
            <Content style={styles.content}>
                <Row>
                    <Col style={styles.cardsCol}>
                        <CardList first={firstLuckList[0]} second={firstLuckList[1]} third={firstLuckList[2]} animationTime={this.animationTime}/>
                    </Col>
                    <Col style={styles.cardsCol}>
                        <CardList first={secondLuckList[0]} second={secondLuckList[1]} third={secondLuckList[2]} animationTime={this.animationTime}/>
                    </Col>
                </Row>
                <Row style={styles.buttonRow}>
                    <Col style={styles.buttonCol}>
                        <View style={styles.button}>
                            <PokerCoinButton onPressIn={() => this.startToTryLuck()} onPressOut={() => this.stopToTryLuck()}>
                                <Text>{LB.build("CONTAINERS.TRY_LUCK.BUTTON")}</Text>
                            </PokerCoinButton>
                        </View>
                    </Col>
                </Row>
            </Content>
        );
    }

    tryNextLuck() {
        store.dispatch({ type: TryLuckAction.TRY_LUCK });
        store.dispatch({ type: TryLuckAction.TRY_LUCK });
    }

    startToTryLuck() {
        this.tryNextLuck();

        if (this.tryluckInterval == null) {
            this.tryluckInterval = setInterval(() => {
                this.tryNextLuck();
            }, this.animationTime);
        }
    }

    stopToTryLuck() {
        clearInterval(this.tryluckInterval);
        this.tryluckInterval = null;
    }
}

reactMixin(TryLuck.prototype, TimerMixin);

export { TryLuck as Component };
